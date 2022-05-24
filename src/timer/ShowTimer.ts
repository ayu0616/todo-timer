import { headZero } from "../utils/helper";

type ShowTimerProps = {
	startTime: Date;
	isStart: boolean;
	isStop: boolean;
};

class ShowTimer implements ShowTimerProps {
	startTime: Date = new Date();
	isStart: boolean = false;
	isStop: boolean = false;
	private accumulate: number;

	// constructor({}: ShowTimerProps) {}

	/**現在の経過時間（ミリ秒）を設定する */
	setAccumulate() {
		if (this.isStop) this.accumulate = this.accumulate;
		else if (this.isStart) this.accumulate = new Date().getTime() - this.startTime.getTime();
		else this.accumulate = 0;
	}

	/**経過時間を文字列で取得する */
	showAccumulate() {
		this.setAccumulate();
		const sec = headZero(Math.floor(this.accumulate / 1000) % 60, 2);
		const min = headZero(Math.floor(this.accumulate / 1000 / 60) % 60, 2);
		const hours = headZero(Math.floor(this.accumulate / 1000 / 60 / 60) % 24, 2);
		return hours + ":" + min + "'" + sec;
	}

	/**タイマーを開始する */
	start() {
		if (!this.isStart) {
			this.startTime = new Date();
			this.isStart = true;
		}
	}

	/**タイマーを停止する */
	stop() {
		if (this.isStart && !this.isStop) {
			this.isStop = true;
		}
	}
}

export default ShowTimer;
