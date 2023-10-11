import styles from "./Table.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FormValues } from "../../type/FormValues";
import { ChangeEvent, Dispatch, useEffect, useState } from "react";
import EditIcon from "../../assets/icons/edit";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import PageNavigation from "../page-navigation/PageNavigation";
import provinces from "../../../data/vietnam-province-district.json";

type Props = {
  forms: FormValues[];
  setForms: Dispatch<React.SetStateAction<FormValues[]>>;
};

const Table = ({ forms, setForms }: Props) => {
  const [numberPerPage, setNumberPerPage] = useState(2);
  const [indexPage, setIndexPage] = useState(0);
  const handleNavigateFormHealth = () => {
    navigate("/declaration");
  };
  const [filterSearch, setFilterSearch] = useState<FormValues[]>(
    forms.slice(
      indexPage * numberPerPage,
      indexPage * numberPerPage + numberPerPage
    )
  );

  useEffect(() => {
    setFilterSearch(
      forms.slice(
        indexPage * numberPerPage,
        indexPage * numberPerPage + numberPerPage
      )
    );
    console.log("numberPerPage ==== ", numberPerPage);
  }, [numberPerPage, indexPage, forms]);

  console.log("numberperpage === ", numberPerPage);
  console.log("filterSearch === ", filterSearch);

  const navigate = useNavigate();
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    const searchForm = forms
      .filter(
        (item) =>
          item.id.toLowerCase().includes(searchText.toLowerCase()) ||
          item.fullName.toLowerCase().includes(searchText.toLowerCase()) ||
          item.selectObject.toLowerCase().includes(searchText.toLowerCase()) ||
          item.dateOfBirth.toLowerCase().includes(searchText.toLowerCase()) ||
          item.gender.toLowerCase().includes(searchText.toLowerCase()) ||
          item.province.toLowerCase().includes(searchText.toLowerCase())
      )
      .slice(
        indexPage * numberPerPage,
        indexPage * numberPerPage + numberPerPage
      );
    setFilterSearch(searchForm);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container text-center">
          <div className="heading-h2-table pt-5 mb-4">
            <h2>Vietnam Health Declaration for foreign entry</h2>
          </div>

          <div className={`${styles.rowSeachNewForm} mb-4`}>
            <div className={styles.searchContainer}>
              <form action="">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                  onChange={handleSearch}
                />
              </form>
            </div>
            <div className={`${styles.makeNewForm} d-flex justify-content-end`}>
              <Button
                onClick={handleNavigateFormHealth}
                className="btn-success"
              >
                New Form
              </Button>
            </div>
          </div>

          <div className={`mb-4 row`}>
            <div className={`col-12`}>
              <table className={`table table-md table-bordered table-hover`}>
                <thead>
                  <tr className={`table-success w-100`}>
                    <th className={`text-center`} style={{ maxWidth: "150px" }}>
                      #
                    </th>
                    <th className={""} style={{ maxWidth: "150px" }}>
                      Form ID
                    </th>
                    <th className={""} style={{ maxWidth: "150px" }}>
                      Full Name
                    </th>
                    <th className={""} style={{ maxWidth: "150px" }}>
                      Object
                    </th>
                    <th className={""} style={{ maxWidth: "150px" }}>
                      Date Of Birth
                    </th>
                    <th className={""} style={{ maxWidth: "150px" }}>
                      Gender
                    </th>
                    <th className={""} style={{ maxWidth: "150px" }}>
                      Contact Province
                    </th>
                  </tr>
                </thead>

                <tbody className="w-100">
                  {filterSearch.length > 0
                    ? filterSearch.map((value, index) => {
                        return (
                          <tr className="w-100" key={index}>
                            <td>{index + 1}</td>
                            <td>
                              <div className={`d-flex align-items-center`}>
                                <span
                                  className={`me-3`}
                                  style={{ color: "blue", fontSize: "20px" }}
                                >
                                  <Link to={`/edit/${index}`} state={value}>
                                    <EditIcon />
                                  </Link>
                                </span>
                                <span
                                  className={`me-3`}
                                  style={{
                                    color: "rgb(220, 53, 69)",
                                    fontSize: "20px",
                                  }}
                                  onClick={() => {
                                    const deleteForms = forms.filter(
                                      (form) => form.id !== value.id
                                    );
                                    setFilterSearch(deleteForms);
                                    setForms(deleteForms);
                                  }}
                                >
                                  <DeleteIcon />
                                </span>
                                <span>{value.id}</span>
                              </div>
                            </td>
                            <td>{value.fullName}</td>
                            <td>{value.selectObject}</td>
                            <td>{value.dateOfBirth}</td>
                            <td>{value.gender}</td>
                            <td>
                              {
                                provinces[
                                  value.province as keyof typeof provinces
                                ].name
                              }
                            </td>
                          </tr>
                        );
                      })
                    : []}
                </tbody>
              </table>
            </div>
          </div>

          <PageNavigation
            forms={forms}
            numberPerPage={numberPerPage}
            setNumberPerPage={setNumberPerPage}
            indexPage={indexPage}
            setIndexPage={setIndexPage}
          />
        </div>
      </div>
    </>
  );
};

export default Table;
