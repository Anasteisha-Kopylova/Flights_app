import { useEffect, useState } from "react";
import { Grid, Typography, CircularProgress, Alert, Box } from "@mui/material";
import FlightCard from "../components/FlightCard";
import axios from "axios";
import type { Flight } from "../types/types";

const FlightsPage = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true);
      try {
        const res = await axios.get<Flight[]>(
          "https://679d13f487618946e6544ccc.mockapi.io/testove/v1/flights"
        );
        setFlights(res.data);
      } catch (err) {
        setError("Помилка при завантаженні рейсів");
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        Список рейсів
      </Typography>

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <CircularProgress />
        </Box>
      )}
      {error && <Alert severity="error">{error}</Alert>}

      <Grid container spacing={2} justifyContent="center">
        {flights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </Grid>
    </Box>
  );
};

export default FlightsPage;
