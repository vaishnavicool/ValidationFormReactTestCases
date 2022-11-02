import "./NearByStore.scss";

export const NearByStore = () => {
  const propCenterData = [
    {
      certerName: "Beverly Center",
      pickupTime: "24 hours",
      distance: "0.7",
      isSizeAvailable: true,
    },
    {
      certerName: "Los Angeles",
      pickupTime: "5-6 business days",
      distance: "1.3",
      isSizeAvailable: true,
    },
    {
      certerName: "Hollywood & Highland",
      pickupTime: "24 hours",
      distance: "1.3",
      isSizeAvailable: false,
    },
  ];

  return (
    <div className="center-wrapper">
      {propCenterData?.map((center, index) => (
        <div className="center-details" key={index}>
          <div className="center-name">
            <p className="center-name-title">
              {center?.certerName}
            </p>
            {center?.isSizeAvailable ? (
              <span className="center-name-subtitle">{`Pick up in ${center?.pickupTime}`}</span>
            ) : (
              <span className="error-icon center-name-subtitle">
                <img
                  src="https://www.freeiconspng.com/thumbs/error-icon/error-icon-32.png"
                  alt="error-icon"
                />
                We don't have your size at this store
              </span>
            )}
          </div>

          <div className="center-distance">
            <p className="center-distance--miles">
              {center?.distance}
              <span>
                <br />
                miles
              </span>
            </p>

            <input
              type="radio"
              name="center_name"
              disabled={!center?.isSizeAvailable}
            />
          </div>
        </div>
      ))}
      <a className = "center-show-more-link" href="#">More stores</a>
    </div>
  );
};
