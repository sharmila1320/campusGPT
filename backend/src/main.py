from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.schemas import AskRequest, AskResponse


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "CampusGPT backend is running 🚀"}

@app.post("/ask", response_model=AskResponse)
def ask_question(payload: AskRequest):
    query = payload.query

    # Placeholder AI logic (we replace with real RAG soon)
    answer = f"You asked: {query}. Real AI answer will come soon."

    return AskResponse(
        answer=answer,
        source="placeholder"
    )
