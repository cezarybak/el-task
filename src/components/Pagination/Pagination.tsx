import "./style.scss";
import ArrowIcon from "./../../assets/svg/arrow.svg";
import { Dispatch, SetStateAction } from "react";

type Props = {
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
};

export const Pagination = ({ activePage, setActivePage }: Props) => (
  <div className="pagination">
    <button
      type="button"
      className="pagination__element"
      disabled={activePage === 0}
      onClick={() => setActivePage((pre) => pre - 1)}
    >
      <ArrowIcon className="pagination__element__icon" />
      Previous
    </button>
    <button
      type="button"
      onClick={() => setActivePage((pre) => pre + 1)}
      disabled={activePage === 10}
      className="pagination__element"
    >
      Next
      <ArrowIcon className="pagination__element__icon__right" />
    </button>
  </div>
);
