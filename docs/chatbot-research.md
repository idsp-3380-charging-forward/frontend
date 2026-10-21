# Technical Overview

## 1. Chatbot Goals

- Conversational experience rather than a quiz-style flow.
- Ask follow-up questions based on the user's responses.
- Provide a summary of the user's main EV considerations at the end.
- Use verified Charging Forward information where possible.
- Provide fallback responses for unsupported or unrecognized questions.

## 2. Privacy & External Services

- Do not request precise user location.
- For charging-station searches, provide an external link to PlugShare.
- Avoid storing unnecessary personal information.
- Do not expose API keys or credentials in frontend code.

## 3. Proposed Frontend Structure

- **Chatbot Component:** Main container for opening and closing the chatbot.
- **Chat Window:** Displays the conversation history.
- **Chat Input:** Accepts user messages.
- **Message Component:** Displays user and chatbot responses.
- **Summary Component:** Displays the end-of-conversation EV considerations summary.

## 4. Conversation State

The chatbot should track:

- Conversation messages.
- Current topic or user concern.
- Previous answers.
- Relevant EV considerations.
- Information needed for the final summary.

## 5. AI Integration

If an AI service is used:

- Send requests through a backend API rather than directly from the frontend.
- Keep API credentials on the server.
- Provide approved Charging Forward information as context.
- Return a safe fallback response when verified information is unavailable.

## 6. Conversation Flow

1. Welcome the user and ask what they would like help with.
2. Identify the main EV-related topic from their response.
3. Ask relevant follow-up questions.
4. Provide information based on the conversation.
5. Link to PlugShare for charging-location searches.
6. Generate a short summary of the user's main EV considerations.

## 7. Testing Requirements

- Test normal conversation flows.
- Test unsupported questions and fallback responses.
- Test end-of-conversation summaries.
- Test privacy-sensitive questions.
- Test mobile and desktop layouts.
- Test accessibility and invalid user input.