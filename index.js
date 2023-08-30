import { html, render } from "lit";

const SPEAKER_1 = {
    name: "Lauri Huhta",
    talkTitle: "Transactions - Get comfortable with your data changes",
    image: "images/lauri.jpeg"
};

const SPEAKER_2 = {
    name: "Niko Korvenlaita",
    talkTitle: "How to download the whole Youtube",
    image: "images/niko.jpeg"
}

const GENERAL = {
    theme: "All Things Data v2",
    month: "September",
    date: "Wednesday 20.9.2023",
    venue: "SparkUp",
    sponsorImage: "https://uploads-ssl.webflow.com/5f29346b09435339caeeac49/5f29346b0943537c20eeae95_arado-green-full-text-new-2.svg"
}

const template = html`
    <main>
        <section name="meetup-info">
            <img src="https://res.cloudinary.com/toughbyte/image/upload/b_transparent,c_pad,g_center,h_230,w_230/v1659504903/ssxuuuii1ki5asxvx7hd.png" id="meetup-logo" />

            <ul>
                <li>${GENERAL.month} Meetup</li>
                <li>${GENERAL.date}</li>
                <li>@ ${GENERAL.venue}</li>
            </ul>

            <label>Sponsored by:</label>
            <img src="${GENERAL.sponsorImage}" id="sponsor-logo" />
        </section>

        <section name="speaker-info">
            <h2>Theme: <span>${GENERAL.theme}</span></h2>

            <div class="speakers">
                ${renderSpeaker(SPEAKER_1)}
                ${renderSpeaker(SPEAKER_2)}
            </div>

        </section>
    </main>
`

function renderSpeaker(speaker) {
    return html`
        <div class="speaker">
            <div class="image-holder">
                <img src="${speaker.image}" />
            </div>
            <span>
                <p name='name'>${speaker.name}</p>
                <p name='title'>${speaker.talkTitle}</p>
            </span>
        </div>
    `
}

render(template, document.body);