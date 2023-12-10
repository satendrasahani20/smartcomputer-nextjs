import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { calculatePercentage, dateFormate } from "../function";

export default function StudentResultCard({ sx, data,onDone }) {
 const PassIcon="https://ik.imagekit.io/bbnngj9wy/pass-result_lgzgKwOok.png"
 const FailIcon="https://ik.imagekit.io/bbnngj9wy/fail-result_natHBIYnd.png"
  return (
    <Card sx={{ maxWidth: 545, ...sx }} className="student-card">
      <CardMedia sx={{ height: 100,width:100 }} image={data?.status==="passed"?PassIcon:FailIcon} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data?.courseName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Test  Date : {dateFormate(data?.attemptAt)}{" "}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Max Mark : {data?.maxMark}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Your Score : {data?.obtainedScore}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Percentage : {calculatePercentage(data?.obtainedScore,data?.maxMark) }%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {" "}
          Status : <span className={`${data?.status=="failed" ?"text-danger":"text-success"} `}><b>{data?.status?.toUpperCase()}</b></span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {" "}
          Attempt Count: {data?.attemptCount}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>onDone(data?.certificateLink)}>{"Download Result"}</Button>
      </CardActions>
    </Card>
  );
}
