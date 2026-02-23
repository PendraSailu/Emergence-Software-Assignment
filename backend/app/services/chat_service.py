import requests
from app.config import OPENROUTER_API_KEY, OPENROUTER_URL
from app.resume_data import RESUME_CONTENT


def generate_chat_response(user_message: str):
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": "openrouter/auto",
        "messages": [
            {
                "role": "system",
                "content": f"""
You are Sailu's AI portfolio assistant.

You have two modes:

1) If the question is about Sailu (skills, projects, education, experience),
   answer strictly using the resume content below.

2) If the question is technical (e.g., programming concepts, Python, ML, etc.),
   provide a clear explanation with examples and code where appropriate.

Rules:
- Be professional.
- Be clear and structured.
- Provide code examples for programming questions.
- Do NOT invent resume details.
- If resume info is not available, say so politely.

Resume:
{RESUME_CONTENT}
"""
            },
            {
                "role": "user",
                "content": user_message
            }
        ]
    }

    try:
        response = requests.post(
            OPENROUTER_URL,
            headers=headers,
            json=payload,
            timeout=30
        )

        result = response.json()

        if "choices" in result:
            return result["choices"][0]["message"]["content"]
        else:
            return result.get("error", {}).get(
                "message",
                "AI service is temporarily unavailable."
            )

    except Exception as e:
        print("Error:", str(e))
        return "AI service is temporarily unavailable. Please try again."