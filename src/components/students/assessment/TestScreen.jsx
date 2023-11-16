import Button from "@/components/common/buttons/Button";
import { saveResultAction, startTestAction, updateTestActivty } from "@/service/action/student";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TestScreen = () => {
  const [englishTestTime, setEnglishTestTime] = useState(1200);
  const { testData, isStartTest } = useSelector(
    (state) => state.developerReducer
  );
  const [answer, setAnswer] = useState([]);
  const [selected, setSelected] = useState({
    questionName: "",
    answer: "",
  });
  // [ {questionName:"",answer:""}]
  const timerRef = useRef();

  const dispatch = useDispatch();
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { courseId } = router.query;

  const saveResult = () => {
    let tempObj = {
      courseId,
      noOfAllQuestion: testData?.question?.length,
      answer,
    };
    dispatch(saveResultAction({data:tempObj}))
  };
  useEffect(() => {
    let testTime = englishTestTime;
    let secondsTimer;
    if (timerRef?.current) {
      timerRef.current.innerText = "20:00";
    }
    secondsTimer = setInterval(() => {
      if (timerRef?.current && testTime >= 0) {
        let hours = parseInt(testTime / 3600, 10);
        let minutes = parseInt((testTime % 3600) / 60, 10);
        let seconds = parseInt(testTime % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerRef.current.innerText = hours + ":" + minutes + ":" + seconds;
        --testTime;
        if (testTime === 0) {
          saveResult();
        }
      }
    }, 1000);
    return () => clearInterval(secondsTimer);
  }, [englishTestTime]);

  useEffect(() => {
    setEnglishTestTime(testData?.timeLeft);
    setCurrentIndex(testData?.prevActivity?.lastQuestionNo);
    setAnswer(testData?.prevActivity?.answer);
  }, [testData]);

  const errorCallBack = () => {
    router.push("/student/dashboard");
  };
  useEffect(() => {
    dispatch(startTestAction({ courseId, errorCB: errorCallBack }));
  }, [courseId]);

  const handleNext = () => {
    if (currentIndex < testData?.question?.length - 1) {
      setAnswer([...answer, selected]);
      dispatch(
        updateTestActivty({
          data: {
            answer,
            lastQuestionNo: currentIndex,
            courseId,
            noOfAllQuestion: testData?.question?.length,
          },
        })
      );
      setCurrentIndex(currentIndex + 1);
    } else {
      saveResult();
    }
  };
  let optionA = testData?.question?.[currentIndex]?.options?.[0];
  let optionB = testData?.question?.[currentIndex]?.options?.[1];
  let optionC = testData?.question?.[currentIndex]?.options?.[2];
  let optionD = testData?.question?.[currentIndex]?.options?.[3];

  const handleSelect = (options) => {
    setSelected({
      questionName: testData?.question?.[currentIndex]?.question,
      answer: options,
    });
  };

  useEffect(() => {
    console.log("answer", answer);
  }, [answer]);
  return (
    <Box className="test-container">
      <Box className="test-header">
        <Typography>
          Time Left - <span ref={timerRef} />
        </Typography>
        <Box>
          {/* <Button label={"Prev"} sx={{mr:1}} size="small" /> */}
          <Button
            onClick={handleNext}
            label={
              currentIndex == testData?.question?.length - 1
                ? "Submit Answer"
                : "Next"
            }
            size="small"
          />
        </Box>
      </Box>
      <Box className="test-body">
        <Typography className="question-name">
          {currentIndex + 1}. {testData?.question?.[currentIndex]?.question}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0px 13px",
          }}
        >
          <Box>
            <Typography
              onClick={() => handleSelect(optionA)}
              className={`${selected?.answer === optionA && "active"} `}
            >
              a). {optionA}
            </Typography>
            <Typography
              onClick={() => handleSelect(optionB)}
              className={`${selected?.answer === optionB && "active"}`}
            >
              b). {optionB}
            </Typography>
          </Box>
          <Box>
            <Typography
              onClick={() => handleSelect(optionC)}
              className={`${selected?.answer === optionC && "active"}`}
            >
              c). {optionC}
            </Typography>
            <Typography
              onClick={() => handleSelect(optionD)}
              className={`${selected?.answer === optionD && "active"}`}
            >
              d). {optionD}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TestScreen;
