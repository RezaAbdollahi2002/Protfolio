from pydantic import BaseModel, Field
from typing import Optional,List
from datetime import date,datetime, time
import models

class DeveloperCreate(BaseModel):
    first_name:str
    last_name:str
    dob:date
    phone_number: str
    email: str
    profile_picture: str
    resume: str