import { React, useEffect, useState } from "react";
import "./Filter.css";

function Filter({
    searchParameter = {},
    setSearchParameter = useState({}),
    isDisabled = false,
}) {
    const [parameterOptions, setParameterOptions] = useState({
        isEditable: true,
        shouldPresetParameter: false,
        shouldHideParameter: false,
    });

    const [buttonOptions, setButtonOptions] = useState({
        text: "Cari Mobil",
        class: "submit-button",
        type: "search",
    });

    useEffect(reconfigureForm, [parameterOptions]);

    const LOOKUPS = [
        { code: "CAR_CATEGORY", description: "2 - 4 orang", value: "small" },
        { code: "CAR_CATEGORY", description: "4 - 6 orang", value: "medium" },
        { code: "CAR_CATEGORY", description: "6 - 8 orang", value: "large" },
        {
            code: "CAR_PRICE_RANGE",
            description: "< Rp. 400.000",
            value: "0-400000",
        },
        {
            code: "CAR_PRICE_RANGE",
            description: "Rp. 400.000 - Rp. 600.000",
            value: "400000-600000",
        },
        {
            code: "CAR_PRICE_RANGE",
            description: "> Rp. 600.000",
            value: "600000-MAX",
        },
        {
            code: "CAR_STATUS",
            description: "Disewakan",
            value: "false",
        },
        {
            code: "CAR_STATUS",
            description: "Tidak disewakan",
            value: "true",
        },
    ];

    function reconfigureForm() {
        const filterForm = document.getElementById("filter-form");

        if (isDisabled) {
            emptyInputValue();
            filterForm.querySelector("#car-name-input").disabled = true;
            filterForm.querySelector("#car-category-input").disabled = true;
            filterForm.querySelector("#car-status-input").disabled = true;
            filterForm.querySelector("#car-price-input").disabled = true;
            filterForm.querySelector(".btn").style.display = "none";
        } else if (parameterOptions.shouldPresetParameter == true) {
            presetParameterValue();
            setInputDisabledAttr();
        }
    }

    function toggleButtonType() {
        if (buttonOptions.type == "search") {
            setButtonOptions({
                text: "Edit",
                class: "edit-button",
                type: "edit",
            });

            setParameterOptions({
                isEditable: false,
                shouldPresetParameter: true,
                shouldHideParameter: false,
            });
        } else if (buttonOptions.type == "edit") {
            setButtonOptions({
                text: "Cari Mobil",
                class: "submit-button",
                type: "search",
            });

            setParameterOptions({
                isEditable: true,
                shouldPresetParameter: true,
                shouldHideParameter: false,
            });
        }
    }

    function presetParameterValue() {
        let filterForm = document.getElementById("filter-form");

        filterForm.querySelector("#car-name-input").value = searchParameter.name
            ? searchParameter.name
            : "";
        filterForm.querySelector("#car-category-input").value =
            searchParameter.category ? searchParameter.category : "";
        filterForm.querySelector("#car-status-input").value =
            searchParameter.isRented ? searchParameter.isRented : "";

        if (searchParameter.maxPrice == Number.MAX_SAFE_INTEGER) {
            filterForm.querySelector(
                "#car-price-input"
            ).value = `${searchParameter.minPrice}-MAX`;
        } else if (searchParameter.maxPrice == "") {
            filterForm.querySelector("#car-price-input").value = "";
        } else {
            filterForm.querySelector(
                "#car-price-input"
            ).value = `${searchParameter.minPrice}-${searchParameter.maxPrice}`;
        }
    }

    function setInputDisabledAttr() {
        let filterForm = document.getElementById("filter-form");

        filterForm.querySelector("#car-name-input").disabled =
            !parameterOptions.isEditable;
        filterForm.querySelector("#car-category-input").disabled =
            !parameterOptions.isEditable;
        filterForm.querySelector("#car-status-input").disabled =
            !parameterOptions.isEditable;
        filterForm.querySelector("#car-price-input").disabled =
            !parameterOptions.isEditable;
    }

    function emptyInputValue() {
        let filterForm = document.getElementById("filter-form");
        filterForm.querySelector("#car-name-input").value = " ";
        filterForm.querySelector("#car-category-input").value = " ";
        filterForm.querySelector("#car-status-input").value = " ";
        filterForm.querySelector("#car-price-input").value = " ";
    }

    function handleButtonClick() {
        const filterForm = document.getElementById("filter-form");

        toggleButtonType();

        //Get Parameter value from Input Element
        let nameParameter = filterForm.querySelector("#car-name-input").value;
        let categoryParameter = filterForm.querySelector(
            "#car-category-input"
        ).value;
        let isRentedParameter =
            filterForm.querySelector("#car-status-input").value;
        let priceRangeValue =
            filterForm.querySelector("#car-price-input").value;
        let minPriceParameter = "";
        let maxPriceParameter = "";
        if (priceRangeValue != "") {
            priceRangeValue = priceRangeValue.split("-");
            minPriceParameter = priceRangeValue[0];
            maxPriceParameter =
                priceRangeValue[1] === "MAX"
                    ? Number.MAX_SAFE_INTEGER
                    : priceRangeValue[1];
        }

        //Update Parameter State
        let newSearchParameter = {
            name: nameParameter ? nameParameter : "",
            category: categoryParameter ? categoryParameter : "",
            isRented: isRentedParameter ? isRentedParameter : "",
            minPrice: minPriceParameter ? minPriceParameter : "",
            maxPrice: maxPriceParameter ? maxPriceParameter : "",
        };

        setSearchParameter(newSearchParameter);
    }

    function handleShowOverlay() {
        const overlay = document.querySelector(".overlay");
        overlay.classList.remove("d-none");
    }

    function handleHideOverlay() {
        const overlay = document.querySelector(".overlay");
        overlay.classList.add("d-none");
    }

    return (
        <div className="filter-component mx-auto">
            <div className="overlay d-none"></div>
            <div className="container search-container p-4">
                <form className="row g-3 align-items-end" id="filter-form">
                    <div className="form-group col-12 col-md">
                        <label htmlFor="car-name-input" className="form-label">
                            Nama Mobil
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="car-name"
                            id="car-name-input"
                            placeholder="Ketika nama/tipe mobil"
                            onFocus={handleShowOverlay}
                            onBlur={handleHideOverlay}
                        />
                    </div>

                    <div className="form-group col-12 col-md">
                        <label
                            htmlFor="car-category-input"
                            className="form-label"
                        >
                            Kategori
                        </label>
                        <select
                            className="form-select"
                            name="car-category"
                            id="car-category-input"
                            onFocus={handleShowOverlay}
                            onBlur={handleHideOverlay}
                        >
                            <option
                                value={""}
                                selected={
                                    parameterOptions.shouldHideParameter
                                        ? false
                                        : true
                                }
                            >
                                Masukan Kapasitas Mobil
                            </option>
                            {LOOKUPS.filter(
                                (lookup) => lookup.code == "CAR_CATEGORY"
                            ).map((data, index) => (
                                <option key={index} value={data.value}>
                                    {data.description}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group col-12 col-md">
                        <label htmlFor="car-price-input" className="form-label">
                            Harga
                        </label>
                        <select
                            className="form-select"
                            name="car-price-range"
                            id="car-price-input"
                            onFocus={handleShowOverlay}
                            onBlur={handleHideOverlay}
                        >
                            <option
                                value={""}
                                selected={
                                    parameterOptions.shouldHideParameter
                                        ? false
                                        : true
                                }
                            >
                                Masukan Harga Sewa per Hari
                            </option>
                            {LOOKUPS.filter(
                                (lookup) => lookup.code == "CAR_PRICE_RANGE"
                            ).map((data, index) => (
                                <option key={index} value={data.value}>
                                    {data.description}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group col-12 col-md">
                        <label
                            htmlFor="car-status-input"
                            className="form-label"
                        >
                            Status
                        </label>
                        <select
                            className="form-select"
                            name="car-status"
                            id="car-status-input"
                            onFocus={handleShowOverlay}
                            onBlur={handleHideOverlay}
                        >
                            {LOOKUPS.filter(
                                (lookup) => lookup.code == "CAR_STATUS"
                            ).map((data, index) => (
                                <option key={index} value={data.value}>
                                    {data.description}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        onClick={handleButtonClick}
                        className={`btn col-auto ${buttonOptions.class}`}
                        type="button"
                    >
                        {buttonOptions.text}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Filter;
