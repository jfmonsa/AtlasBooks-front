import { useState, useEffect } from "react";
import { useAuth } from "@hooks/useAuth.js";
import { getBookRateByUser, rateBook } from "../services/book-rate.service.js";

// components
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Card } from "@components/Card/Card.jsx";

export function RateBookSection({ id }) {
  const user = useAuth();
  const [rate, setRate] = useState(null);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const getRate = async () => {
      try {
        const rateData = await getBookRateByUser(id, user?.id);
        setRate(rateData.data.data.rate);
      } catch (error) {
        console.error("Error fetching book rating:", error);
      }
    };

    getRate();
  }, [id, user?.id]);

  const handleRate = async (index) => {
    setRate(index);
    try {
      rateBook(index, id);
    } catch (error) {
      window.alert(error.response.data[0]);
    }
  };
  return (
    <Card h1Text="Califica este libro" h1Center id="rate-stars" notFullWidth>
      <div className="stars_container">
        {Array(5)
          .fill()
          .map((_, index) =>
            (number || rate) >= index + 1 ? (
              <AiFillStar
                key={index}
                className="stars"
                style={{ color: "orange" }}
                onClick={() => handleRate(index + 1)}
                onMouseEnter={() => setNumber(index + 1)}
                onMouseLeave={() => setNumber(0)}
              />
            ) : (
              <AiOutlineStar
                key={index}
                className="stars"
                style={{ color: "black" }}
                onClick={() => handleRate(index + 1)}
                onMouseEnter={() => setNumber(index + 1)}
                onMouseLeave={() => setNumber(0)}
              />
            ),
          )}
      </div>
    </Card>
  );
}
