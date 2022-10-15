import shallow from "zustand/shallow";
import { useStore } from "../store";
import style from "./style.module.css"

const CatsComponent = () => {
    const { cats, selectedCat, setSelectedCat } = useStore(state => state, shallow)

    const handleOnCLick = (id: string) => {
        setSelectedCat(id);
    }

    return (
        <>
            <div className={style["list-cats"]}>
                {cats.map((cat) => (
                    <div className={style["list-cats-item"]}
                        key={cat.id}
                        onClick={() => handleOnCLick(cat.id)}
                    >
                        <h4>{cat.name}</h4>
                    </div>
                ))}
            </div>

            {(selectedCat &&
                <div className={style["selected-cat"]}>

                    <>
                        <h4>{selectedCat.name}</h4>
                        <h3>Age:{selectedCat.age}</h3>
                        <img src={selectedCat.avatar} alt={selectedCat.name} />
                    </>

                </div>
            )}

        </>

    );
};

export default CatsComponent;