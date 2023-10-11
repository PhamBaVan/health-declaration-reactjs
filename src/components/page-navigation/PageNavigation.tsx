import { ChangeEvent } from "react";
import { FormValues } from "../../type/FormValues";
type Props = {
  forms: FormValues[];
  numberPerPage: number;
  setNumberPerPage: React.Dispatch<React.SetStateAction<number>>;
  indexPage: number;
  setIndexPage: React.Dispatch<React.SetStateAction<number>>;
};
const PageNavigation = ({
  forms,
  numberPerPage,
  setNumberPerPage,
  indexPage,
  setIndexPage,
}: Props) => {
  const chooseNumberPerPage = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setNumberPerPage(Number(selectedValue));
  };
  const numberItemPerPage = Number(numberPerPage);

  const numberOfPage = Math.ceil(forms.length / numberItemPerPage);

  const listItems: JSX.Element[] = [];
  const handleIndexPage = (index: number) => {
    setIndexPage(index);
  };

  for (let i = 0; i < numberOfPage; i++) {
    listItems.push(
      <li className={`page-item`} onClick={() => handleIndexPage(i)} key={i}>
        {
          <div
            className={`page-link ${
              indexPage === i && "bg-primary text-white"
            }`}
          >
            {i + 1}
          </div>
        }
      </li>
    );
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-end m-0">
            <li className={`page-item ${indexPage === 0 ? "disabled" : ""}`}>
              <div
                className="page-link"
                onClick={() => setIndexPage((index) => index - 1)}
              >
                Previous
              </div>
            </li>
            {listItems}
            <li
              className={`page-item ${
                indexPage === numberOfPage - 1 ? "disabled" : ""
              }`}
            >
              <div
                className="page-link"
                onClick={() => setIndexPage((index) => index + 1)}
              >
                Next
              </div>
            </li>
          </ul>
        </nav>
        <form className="d-flex align-items-center justify-content-end">
          <select
            onChange={chooseNumberPerPage}
            className="form-select"
            style={{ width: "5rem" }}
          >
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
          </select>
          <label className="mx-2">Items/Page</label>
        </form>
      </div>
    </>
  );
};

export default PageNavigation;
