import React, { useEffect, useState } from "react";
import { PadSequences } from "./PadSequences";

import "./Feedback.css";
import * as tf from "@tensorflow/tfjs";

import {
  TextField,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { useSelector } from "react-redux";
import { selectVideo } from "../features/videoSlice";
import { selectUser } from "../features/userSlice";
import db from "./Firebase";

function Feedback1() {
  const video = useSelector(selectVideo);
  const user = useSelector(selectUser);

  console.log(video.url);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();

  const url = {
    model:
      "https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json",
    metadata:
      "https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json",
  };

  const OOV_INDEX = 2;

  const [metadata, setMetadata] = useState();
  const [model, setModel] = useState();
  const [testText, setText] = useState("");
  const [testScore, setScore] = useState("");
  const [trimedText, setTrim] = useState("");
  const [seqText, setSeq] = useState("");
  const [padText, setPad] = useState("");
  const [inputText, setInput] = useState("");

  async function loadModel(url) {
    try {
      const model = await tf.loadLayersModel(url.model);
      setModel(model);
    } catch (err) {
      console.log(err);
    }
  }

  async function loadMetadata(url) {
    try {
      const metadataJson = await fetch(url.metadata);
      const metadata = await metadataJson.json();
      setMetadata(metadata);
    } catch (err) {
      console.log(err);
    }
  }

  const getSentimentScore = (text) => {
    console.log(text);
    const inputText = text
      .trim()
      .toLowerCase()
      .replace(/(\.|\,|\!)/g, "")
      .split(" ");
    setTrim(inputText);
    console.log(inputText);
    const sequence = inputText.map((word) => {
      let wordIndex = metadata.word_index[word] + metadata.index_from;
      if (wordIndex > metadata.vocabulary_size) {
        wordIndex = OOV_INDEX;
      }
      return wordIndex;
    });
    setSeq(sequence);
    console.log(sequence);
    // Perform truncation and padding.
    const paddedSequence = PadSequences([sequence], metadata.max_len);
    console.log(metadata.max_len);
    setPad(paddedSequence);

    const input = tf.tensor2d(paddedSequence, [1, metadata.max_len]);
    console.log(input);
    setInput(input);
    const predictOut = model.predict(input);
    const score = predictOut.dataSync()[0];
    predictOut.dispose();
    setScore(score);

    db.collection("feedbacks").add({
      videotitle: video.title,
      userid: user.email,
      sentiment_score: score * 100,
      feedback: text,
    });

    return score;
  };

  useEffect(() => {
    tf.ready().then(() => {
      loadModel(url);
      loadMetadata(url);
    });
  }, []);

  console.log(testScore * 100);

  return (
    <>
      <Grid
        container
        style={{
          height: "100vh",
          width: "50vw",
          padding: 20,
          backgroundColor: "beige",
        }}
      >
        <Grid
          item
          lg={6}
          xs={12}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            style={{
              width: "500px",
              height: "100px",
              marginTop: "200px",
              marginLeft: "400px",
            }}
            id="standard-read-only-input"
            label="Type your feedback here"
            onChange={(e) => setText(e.target.value)}
            defaultValue=""
            value={testText}
            multiline
            rows={4}
            variant="outlined"
          />
          <br />
          <br />

          {testText ? (
            <Button
              style={{ width: "20vh", height: "5vh", marginLeft: "300px" }}
              variant="outlined"
              onClick={() => getSentimentScore(testText)}
            >
              Submit
            </Button>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Feedback1;
