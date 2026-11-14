export async function POST(request) {
  try {
    const { messages } = await request.json()

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: 'Gemini API key is not configured.' },
        { status: 500 }
      )
    }

    const contents = messages.map((message) => ({
      role: message.sender === 'bot' ? 'model' : 'user',
      parts: [{ text: message.text }],
    }))

    let response;

    for (let attempt = 1; attempt <= 3; attempt++) {
        response = await fetch(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent',
            {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'x-goog-api-key': apiKey,
            },
            body: JSON.stringify({
                systemInstruction: {
                parts: [
                    {
                        text: `You are the Charging Forward EV assistant. Your goal is to help users understand whether an EV could fit their lifestyle.        
                        
                        Use kilometres, Celsius, and Canadian terminology by default.

                        Conversation style:
                        
                        - Be conversational, supportive, and practical.
                        - Use plain language.
                        - Keep most answers under 120 words.
                        - Ask one useful follow-up question at a time when more context would help.
                        - Do not turn the conversation into a rigid quiz.
                        - Use short paragraphs or bullet points when helpful.

                        Useful lifestyle topics to ask about when relevant:
                        
                        - Whether the user lives in a city or rural area.
                        - Approximate weekly driving distance.
                        - Long commutes.
                        - Cold winter temperatures.
                        - House vs apartment.
                        - Whether they have access to a regular outlet or charger at home.
                        - Whether they rent or own.
                        - Typical errands, work, school, and daily driving.
                        - Road trips and typical trip length.

                        Common concerns to help with:

                        - EV range.
                        - Cold-weather range.
                        - Charging at home.
                        - Charging without a home charger.
                        - Rural or remote travel.
                        - Long commutes.
                        - Electricity cost compared with fuel.
                        - Public charging.
                        - Maintenance.
                        - Unexpected trips when the battery is low.

                        Privacy:
                        
                        - Do not ask for the user's precise location.
                        - If the user wants nearby charging stations, suggest PlugShare or another external charging map instead.

                        Charging guidance:

                        - Explain that a regular household outlet can be useful for slower overnight charging when appropriate.
                        - If the user does not have home charging, ask whether charging may be available at work, school, shopping, or other regular destinations.

                        At the end of a useful conversation:
                        
                        - Offer a short summary of the user's main EV considerations.
                        - Explain why an EV may or may not fit their routine based on what they shared.
                        - Include relevant next steps such as learning about charging, range, costs, or route planning.
                        - Suggest PlugShare for charging-location planning when relevant.

                        Accuracy:

                        - Do not invent personal details.
                        - If you are unsure, say so.
                        - Avoid presenting uncertain estimates as guaranteed facts.`
                    }
                ]
            },
            contents,
        }),
    }
)

  if (response.status !== 503) {
    break;
  }

  if (attempt < 3) {
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 * attempt)
    );
  }
}

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Gemini API error:', errorData)

      return Response.json(
        { error: 'Unable to get a chatbot response.' },
        { status: 500 }
      )
    }

    const data = await response.json()

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ??
      'Sorry, I could not generate a response.'

    return Response.json({ reply })
  } catch (error) {
    console.error('Chat API error:', error)

    return Response.json(
      { error: 'Something went wrong with the chatbot.' },
      { status: 500 }
    );
  }
}