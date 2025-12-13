# LogiTrack-RestAPI

# 🚚 Logistics REST API

A RESTful API built using **Node.js, Express.js, and MongoDB** to manage logistics data efficiently. This project implements full **CRUD operations** for handling shipment details such as order information, contact details, shipping date, and destination address.

---

## 📌 Project Overview

The **ABC Logistics REST API** is designed to manage logistics records for a delivery system. It allows users to create, retrieve, update, and delete shipment data using clean and scalable REST APIs.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Middleware:** Body-Parser  
- **API Architecture:** REST  

---

## 📂 Features

- Create logistics records  
- Retrieve all logistics data  
- Update logistics details using ID  
- Delete logistics records using ID  
- Request validation and error handling  
- Clean REST API structure  

---

## 📑 Data Model

Each logistics record contains the following fields:

| Field | Description |
|------|------------|
| `orderid` | Order identification number |
| `phone` | Customer phone number |
| `email` | Customer email address |
| `shipping` | Shipping date |
| `destination` | Destination address |

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|------|---------|------------|
| GET | `/` | Welcome message |
| GET | `/log` | Get all logistics records |
| POST | `/logistics` | Add new logistics data |
| PUT | `/logistics/:id` | Update logistics by ID |
| DELETE | `/logistics/:id` | Delete logistics by ID |

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/abc-logistics-rest-api.git
