import { Children, MouseEventHandler } from "react"
import { useNavigate } from "react-router-dom"
import { Footer } from "../footer/footer-begin"
import { NavBar } from "../navbar/navbar-begin"
import { ProgressBar } from "../progressbar/ProgressBar"
import { IButtonA } from "../../components/footer/footer-begin";

// Application
type Type = {
    title: string,
    children: JSX.Element,
    backBtn: boolean,
    progressShow: boolean,
    nextBtn: IButtonA,
    progressPercentage: number,
    nextClic: MouseEventHandler<HTMLButtonElement>
}
export const Begin = ({
    title,
    nextBtn,
    nextClic,
    backBtn,
    progressShow,
    progressPercentage,
    children
}: Type) => {
    return (
        <div className="relative h-screen w-screen">
            <NavBar />
            <div className="bodyca overflow-scroll">
                {children}
            </div>
            {nextBtn && <Footer progressShow={progressShow} progressPercentage={progressPercentage} nextBtn={nextBtn} nextClic={nextClic} backBtn={backBtn} />}
        </div>
    )
}

Begin.defaultProps = {
    title: undefined,
    nextBtn: undefined,
    backBtn: undefined,
    nextClic: undefined,
    progressShow: true,
    progressPercentage: 0
}
