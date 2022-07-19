import * as React from "react";
import { Container } from "@mui/material";
import Image from "next/image";
import useSWR from "swr";
import fetcher from "../utils/api/fetcher";
import updateDataFunc from "../utils/api/updateDataFunc";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, Stack, Divider } from "@mui/material";
import { IconButton } from "@mui/material";
import NavbarAfterLogin from "../components/containers/NavBarAfterLogin";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const approvePost = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/place/product`,
    fetcher
  );
  if (error) return "It has error.";
  if (!data) return "Loading ...";
  console.log("data===", data.response);
  const rows = data.response;

  const updateApprove = (e) => {
    updateDataFunc(
      `${process.env.NEXT_PUBLIC_API_URL}/place/product/approve/${e}`
    );
  };

  return (
    <div>
      <NavbarAfterLogin />
      <Container align="center">
        <Image
          src="/approve_image.jpeg"
          alt="Approve Image"
          width={700}
          height={150}
        />
      </Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Content title
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                User email
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Post time
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Approve
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.title}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.createdAt}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => updateApprove(row._id)}>
                    Approve
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default approvePost;
