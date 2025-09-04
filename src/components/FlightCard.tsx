import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import type { Flight } from "../types/types";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Link } from "react-router-dom";

interface FlightCardProps {
  flight: Flight;
}

const FlightCard = ({ flight }: FlightCardProps) => {
  const handleFavorite = () => {
    alert(`Додано рейс ${flight.id} в обране!`);
  };

  return (
    <Card sx={{ maxWidth: 345, m: 1 }}>
      <Link
        to={`/flights/${flight.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardContent>
          <Typography variant="subtitle2" color="textSecondary">
            Рейс: {flight.id}
          </Typography>
          <Typography variant="h6">{flight.airline}</Typography>
          <Typography>
            {flight.from} → {flight.to}
          </Typography>
          <Typography>
            Відправлення:{" "}
            {new Date(flight.departureTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            | Прибуття:{" "}
            {new Date(flight.arrivalTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
          <Typography>Ціна: ${flight.price}</Typography>
          <Typography>
            Термінал: {flight.terminal} | Ворота: {flight.gate}
          </Typography>
          <Typography>
            Квитки: {flight.tickets.remaining} / {flight.tickets.total}{" "}
            залишилось
          </Typography>
        </CardContent>
      </Link>
      <CardActions>
        <IconButton onClick={handleFavorite}>
          <StarBorderIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default FlightCard;
