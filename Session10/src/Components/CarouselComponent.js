import { Container } from "react-bootstrap"

import { IMAGE_URL } from "../Config"

const CarouselComponent = () => {

    return (
        <Container className="mt-3 bg-black h-80" fluid>

            <Container className="p-4 d-flex flex-row justify-evenly items-center transition-all ">

                <img
                    width="260"
                    height="260"
                    src={`${IMAGE_URL}ef3i0k1ilhdsistcykog`}
                    className="hover:cursor-pointer translate-1 duration-300"
                />

                <img
                    width="260"
                    height="260"
                    src={`${IMAGE_URL}awurei8ypqkafoqay9ym`}
                />

                <img
                    width="260"
                    height="260"
                    src={`${IMAGE_URL}zpkkdkmvlj5cuvqbc50t`}
                />
                <img
                    width="260"
                    height="260"
                    src={`${IMAGE_URL}s5ug2key6e2sptaxku5v`}
                />
            </Container>
        </Container>
    )
}

export default CarouselComponent