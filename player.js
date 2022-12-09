import React from "react";
import scissors from "./assets/scissor.png"
import rock from "./assets/stone.png"
import paper from "./assets/papers.png"

const Player = ({ weapon }) => (
    <>
        <div className="player">
            <img
                className="player-image"
                src={
                    weapon === "rock" ? rock : weapon === "scissors" ? scissors : paper
                }
                alt="Rock Paper Scissors"
            />
        </div>
    </>
);

export default Player;
