import signetImage from '../assets/signet.png';
import styles from './WhiskeyCard.module.css';

interface SignetProps {
  className?: string;
}

function Signet({ className }: SignetProps): JSX.Element {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div className={styles.imageContainer}>
        <img
          src={signetImage}
          alt="Macallan Signet"
          className={styles.image}
        />
      </div>
      <h2 className={styles.title}>Macallan Signet</h2>
      <div className={styles.divider}></div>
      <p className={styles.description}>
        맥캘란 시그넷은 스코틀랜드 스페이사이드 지역의 맥캘란 증류소에서 생산되는 프리미엄 싱글 몰트 위스키입니다.
        다크 초콜릿과 오렌지의 풍부한 향이 특징이며, 최고급 캐스크에서 숙성된 위스키를 블렌딩한 제품입니다.
        부드럽고 우아한 맛으로 고급 위스키를 즐기는 이들에게 추천하는 제품입니다.
      </p>
    </div>
  );
}

export default Signet;
