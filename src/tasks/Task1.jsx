import {
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  TableHead,
  Button,
} from "@mui/material";

import { useState, useEffect } from "react";

import axios from "axios";

const Task1 = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  let url = "https://jsonplaceholder.typicode.com/posts";

  const fetchApi = async (url) => {
    setLoading(true);
    await axios
      .get(url)
      .then((res) => {
        setLoading(false);
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        setError(err?.message);
        console.log(err, "err");
        setLoading(false);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchApi(url);
    }, [2000]);
  }, []);

  return (
    <>
      <Grid container>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Grid item>
            <Button variant="contained" onClick={() => fetchApi(url)}>
              Refetch
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TableContainer>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!loading &&
                data?.data?.map((item, idx) => {
                  return (
                    <TableRow key={idx}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item?.title}</TableCell>
                      <TableCell>{item?.body}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
            {loading && <h6>Loading...</h6>}
            {error?.length > 0 && <h6>{error}</h6>}
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Task1;
