FROM python:3.10-alpine

WORKDIR /code
COPY requirements.txt /code/
ENV PYTHONUNBUFFERED=1
RUN pip install -r requirements.txt
COPY ./ /code/



CMD python /app/manage.py runserver 0.0.0.0:8000