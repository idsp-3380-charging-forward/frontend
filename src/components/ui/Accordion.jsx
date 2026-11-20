import { useState } from "react";
import {
    ArrowForward as ArrowForwardIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon,
} from "@mui/icons-material";

export default function Accordion({ title, children }) {
    // false means the dropdown is closed
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <section className="accordion">
            {title}
            <button
                type="button"
                aria-expanded={isExpanded}
                IconComponent={KeyboardArrowDownIcon}
                // when button clicked, calls setIsExpanded function and turns it false
                onClick={() => setIsExpanded((expanded) => !expanded)}>
                {isExpanded ?
                    <KeyboardArrowDownIcon />
                :   <ArrowForwardIcon />}
            </button>
            {/* if isExpanded is true, show the paragraph */}
            {isExpanded && <p>{children}</p>}
        </section>
    );
}


export default function Dropdown() {

    return(
        <Accordion
        title="Deroche, BC - October 31"
        aria-expanded={!expanded}
        >
        <p>Saturday, October 31, 10 am - 4 pm
            Deroche Community, 41350 Lougheed Highway
A free afternoon with free hot dogs, and a chance to get behind the wheel of an electric vehicle. 

Come by to:
• Test drive an EV and see how it feels on the road
• Try charging one and see how simple it can be
• Ask your questions about winter driving, range, charging, costs and more
• Get practical, unbiased information about EVs and what makes sense for life in Canada

No sales pitch. Just a fun, free afternoon and a chance to experience an EV for yourself.</p>

        </Accordion>
    )
}