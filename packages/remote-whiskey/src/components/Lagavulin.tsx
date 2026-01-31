import lagavulinImage from '../assets/lagavulin.png';
import styles from './WhiskeyCard.module.css';

interface LagavulinProps {
  className?: string;
}

function Lagavulin({ className }: LagavulinProps): JSX.Element {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div className={styles.imageContainer}>
        <img
          src={lagavulinImage}
          alt="Lagavulin"
          className={styles.image}
        />
      </div>
      <h2 className={styles.title}>Lagavulin</h2>
      <div className={styles.divider}></div>
      <p className={styles.description}>
        라가불린은 스코틀랜드 아일라 섬의 남부 해안에 위치한 증류소에서 생산되는 싱글 몰트 위스키입니다.
        강렬한 피트(peat) 향과 연기 맛이 특징이며, 16년 숙성 제품이 가장 유명합니다.
        깊고 복잡한 맛의 여운이 길어 위스키 애호가들에게 사랑받는 제품입니다.
      </p>
    </div>
  );
}

export default Lagavulin;
