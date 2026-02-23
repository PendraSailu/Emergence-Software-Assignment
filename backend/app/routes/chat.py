from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import ChatHistory
from app.services.chat_service import generate_chat_response

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/chat")
def chat(request: ChatRequest, db: Session = Depends(get_db)):

    reply = generate_chat_response(request.message)

    chat_entry = ChatHistory(
        user_message=request.message,
        bot_reply=reply
    )

    db.add(chat_entry)
    db.commit()

    return {"reply": reply}