FROM python:3.8
WORKDIR /

# Install the requests and Beautiful Soup libraries
RUN pip install requests bs4 pandas cerberus lxml

# Copy the script to the image
COPY import-data.py .

RUN mkdir /data

# Set the entrypoint to the script
ENTRYPOINT ["python", "import-data.py"]