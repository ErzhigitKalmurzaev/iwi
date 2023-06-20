import axios from "axios";

export const inctance = axios.create({
  baseURL: "https://api.kinopoisk.dev/v1.3/",
  headers: {'Content-Type': 'application/json', "X-API-KEY": 'PHV75ZD-51ZM0G2-GV0ZTT0-QMV6581'}
});

export const users = axios.create({
  baseURL: "http://localhost:3001",
  headers: {'Content-Type': 'application/json'}
});

// QVZ4MQ9-AH9M59V-JBHS32Z-G1BFCKJ