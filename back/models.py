from pydantic import BaseModel, Field
from sqlalchemy import (
    Column, Integer, String, ForeignKey, Date
)
from sqlalchemy.orm import relationship
from database import Base

class Developer(Base):
    __tablename__ = "developer"
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    dob = Column(Date,nullable=False)
    phone_number = Column(String,nullable=False)
    email = Column(String,unique=True, index=True, nullable=False)
    profile_picture = Column(String, nullable=False)
    resume = Column(String, nullable=False)
