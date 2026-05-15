// import { NextResponse } from "next/server"

// export async function POST(req) {
//   const { message } = await req.json()

//   let reply = "দুঃখিত, আমি বুঝতে পারিনি।"

//   if (message.toLowerCase().includes("hello")) {
//     reply = "হ্যালো 👋 আমি কিভাবে সাহায্য করতে পারি?"
//   }

//   if (message.toLowerCase().includes("order")) {
//     reply = "আপনার order processing এ আছে।"
//   }

//   return NextResponse.json({ reply })
// }


import OpenAI from "openai"
import { NextResponse } from "next/server"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req) {
  const { message } = await req.json()

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: message }
    ],
  })

  return NextResponse.json({
    reply: completion.choices[0].message.content
  })
}
