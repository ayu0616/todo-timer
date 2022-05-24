import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ShowTimer from "../src/timer/ShowTimer";
import { headZero } from "../src/utils/helper";

/**経過時間を文字列で取得する */
const showAccumulate = (accumulateNum: number) => {
	const sec = headZero(Math.floor(accumulateNum / 1000) % 60, 2);
	const min = headZero(Math.floor(accumulateNum / 1000 / 60) % 60, 2);
	const hours = headZero(Math.floor(accumulateNum / 1000 / 60 / 60) % 24, 2);
	return hours + ":" + min + "'" + sec;
};

const Timer = () => {
	const [accumulate, setAccumulate] = useState(0);
	const [isStart, setIsStart] = useState(false);
	const [startTime, setStartTime] = useState(new Date());
	const [isStop, setIsStop] = useState(false);
	const start = () => {
		if (!isStart) {
			setIsStart(true);
			setStartTime(new Date());
		}
	};
	const stop = () => {
		if (isStart && !isStop) setIsStop(confirm("ストップウォッチを停止しますか？"));
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (isStart && !isStop) setAccumulate(() => new Date().getTime() - startTime.getTime());
		}, 500);
		return () => clearInterval(interval);
	}, [isStart, isStop]);
	return (
		<div className="m-3 p-3">
			<div>{showAccumulate(accumulate)}</div>
			<Button onClick={start}>開始</Button>
			<Button onClick={stop}>停止</Button>
		</div>
	);
};

export default Timer;
