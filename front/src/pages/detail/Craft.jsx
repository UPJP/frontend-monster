import CraftList from "../../component/list/CraftList";
import "../../component/list/CraftList.css";
function Craft({ item }) {
    return (
        <>
            <header>
                <img src=""></img>
            </header>
            <main>
                <h1>칵테일 계량</h1>
                <h4>파트</h4>
                <p>
                    칵테일은 ‘파트’의 단위로 계량합니다.
                    파트는 작은 양이나 큰 양 모두에 적용되는 상대적인 개념의
                    간단한 계량 단위입니다. 예를 들어, 레시피에서 A 재료 1파트,
                    B 재료 2파트라고 한다면 B 재료를 두 배 정도 더 넣으면 됩니다.
                </p>
                <h4>대시/스플래시</h4>
                <p>
                    대시는 스플래시보다 큰 개념이지만 둘 다 적은 양을 나타냅니다.
                    대시나 스플래시는 칵테일에 향신료를 사용할 때 사용되는 단위로써,
                    약간 주관적인 판단이 필요합니다. 스플래시는 믹서와 같은 희석 음료와
                    같은 점성액 향신료에 사용되며 대쉬는 타바스코 같은 강한 향신료에 사용됩니다.
                </p>
                <h4>지그러</h4>
                <p>
                    지그러는 일반적으로 양 끝이 두 개의 원뿔 형태로 구성된 금속 계량 도구입니다.
                </p>
                <h4>아래의 칵테일 용어 및 계량 단위에 익숙해져보세요.</h4>
                <p>
                    지그러: 1 1/2 온스 (야드파운드법) 2.4 센티리터 (미터법)
                    컵: 8 온스 (야드파운드법) 24 센티리터 (미터법)
                    테이블스푼: 1/2 온스 (야드파운드법) 1.5 센티리터 (미터법)테이블스푼:
                </p>
            </main>
            <footer>
                <CraftList />
            </footer>

        </>
    );
}
export default Craft;