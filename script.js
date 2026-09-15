/* ============================================================
   EDIT ME — everything on this page is pulled from here.
   Fill in your own names, dates, photos, and words below,
   then open index.html (or push to GitHub Pages) to see it live.
   ============================================================ */

const SITE_CONFIG = {

  // ---- The two of you ----
  you: "Your Name",
  partner: "Partner's Name",

  // Where each of you is based (shown in the LDR section)
  yourCity: "Manila, Philippines",
  yourFlag: "🇵🇭",
  partnerCity: "Kuala Lumpur, Malaysia",
  partnerFlag: "🇲🇾",

  // Distance shown in the LDR section (approximate is fine)
  distanceKm: "2,400",

  // The day you two officially started — used to auto-count days together
  // Format: YYYY-MM-DDT00:00:00
  relationshipStart: "2026-07-10T00:00:00",

  // What today's monthsary is called (shown on the opening screen)
  monthsaryLabel: "2nd Monthsary",

  // ---- Your relationship timeline ----
  // Add or remove as many entries as you like
  timeline: [
    {
      date: "July 12, 2026",
      title: "The day it became official",
      text: "One text, one call, and suddenly the distance didn't feel so big anymore.",
      icon: "<3"
    },
    {
      date: "July 2026",
      title: "First video call that lasted till 3AM",
      text: "We said 'okay, last five minutes' about four different times.",
      icon: "📱"
    },
    {
      date: "August 2026",
      title: "First 'I miss you' that we both said unprompted",
      text: "Nothing dramatic happened — we just both felt it at the same time.",
      icon: "🥹"
    },
    {
      date: "September 10, 2026",
      title: "2nd Monthsary",
      text: "Two months of timezones, playlists, and choosing each other on purpose, every day.",
      icon: "🎉"
    }
  ],

  // ---- Things I love about you (flip cards) ----
  // "front" is the short teaser, "back" is what's revealed on flip
  loveList: [
    { front: "Your voice notes", back: "Even your 2-minute rambles about your day are the best part of mine." },
    { front: "How you remember things", back: "You remember the smallest details I mention once, weeks later." },
    { front: "Your laugh", back: "It's louder over a bad connection than most people's is in person." },
    { front: "How patient you are", back: "With the time difference, the delays, the missed calls — you never once made it feel like a burden." },
    { front: "The way you say goodnight", back: "Even eight hours apart, it's the last thing I look forward to every day." },
    { front: "You, just generally", back: "I didn't think someone this far away could feel this close." }
  ],

  // ---- Photo / screenshot memory gallery ----
  // Put your image files in the /images folder and list them here.
  // caption is optional.
  photos: [
    { src: "images/photo1.jpg", caption: "First selfie you sent me" },
    { src: "images/photo2.jpg", caption: "That 2AM call screenshot" },
    { src: "images/photo3.jpg", caption: "Our first 'ily' texts" },
    { src: "images/photo4.jpg", caption: "You, being cute as usual" }
  ],

  // ---- LDR wishlist: things I wish I could do with you ----
  wishlist: [
    "Fall asleep on a video call without either of us hanging up first",
    "Cook a meal together in the same kitchen",
    "Hold your hand crossing an actual street, not just over text",
    "Meet your family in person",
    "Fight over the aircon temperature in person, for once",
    "Wait for you at the airport arrivals gate"
  ],

  // ---- The letter ----
  // Use \n\n for a paragraph break. You can use {{partner}}, {{you}}, and
  // {{days}} anywhere in this text and they'll be auto-filled in.
  letter: `hii sayanggg, happy 2nd monthsaryyy 🥹❤️

idk what to give you for our 2nd month 😭 I kept asking my friends what would be a nice gift for you, but they didn't know either HAHAHA, so I decided to do this again and give it to you instead T^T

you know I'm supposed to be reviewing at this time, but I literally can't focus because our monthsary is getting closer and closer 😭 HAHAHA. But I'll send this on our monthsary, so here it is hehe.

Happy second monthsary, loveyyy. ❤️

Uhm, I don't tell you this enough, but sometimes I look at you or read our conversations and I get scared thinking about how much I'd miss you if you were ever gone. Like, I genuinely don't know what I would do because you've already made such a huge impact on my life.

Sometimes I wish I had met you earlier. Before you, I didn't even realize how guarded I was. I was so used to protecting myself and keeping my feelings to myself, but somehow, you made me softer without even trying.

And now, I don't want to go back to who I was before you.

You made me realize that I can still love someone deeply without being scared all the time. You made me feel safe enough to be vulnerable, to be clingy, to be silly, and to just be myself. I love how comfortable I feel with you, even when we're just doing nothing or talking about the most random things.

I know it's only been two months, but you've already become such an important part of my life. And honestly, I'm so grateful that I met you.

I don't know what the future will look like, but I hope I get to experience more of it with you. More random conversations, more late-night talks, more games, more "have you eaten?" messages, more kulit moments, more laughter, more memories, and of course, more monthsaries with you. 🥹❤️

Thank you for coming into my life and for making me feel loved in a way that feels so different and so genuine. Thank you for being patient with me, for understanding me, and for making me feel like I don't have to be so guarded anymore.

Happy 2nd monthsary, my lovey. ❤️

I'm really, really grateful that it's you. And if I had the chance to choose again, I'd still choose you.

I love you so much, sayang. 🥹❤️ Here's to us and to many more months together. 🫶🏻`,

  // ---- Final surprise button ----
  finalSurpriseText: "No matter how many kilometers are between us, my favorite place is still wherever you are. 💕",
};