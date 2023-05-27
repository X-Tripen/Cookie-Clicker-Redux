import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import ScoreboardItem from "./ScoreboardItem";
import {
  fetchScoreList,
  loadMoreScores,
} from "../../../../app/slices/scoreboardSlice";
import Button from "../../../Button";

function ScoreboardList(): JSX.Element {
  const scoreList = useAppSelector((state) => state.scoreboard.scoreList);
  const err = useAppSelector((state) => state.scoreboard.error);
  const dispatch = useAppDispatch();

  const handleLoadMore = () => {
    dispatch(loadMoreScores());
  };

  const loadMoreScoresAction = loadMoreScores();

  useEffect(() => {
    dispatch(fetchScoreList());
  }, [dispatch, loadMoreScoresAction]);

  const renderedScoreboardList = scoreList.map((scoreboard) => (
    <ScoreboardItem
      key={scoreboard.id}
      userName={scoreboard.username}
      score={scoreboard.score}
    />
  ));

  return (
    <ol className="flex flex-col gap-3 items-center max-h-[500px] overflow-y-scroll ml-4">
      {renderedScoreboardList}
      {err && `error: ${err}`}
      <Button primary onClick={handleLoadMore}>
        load more
      </Button>
    </ol>
  );
}

export default ScoreboardList;
