export const Contact = ({ contact }) => {
  const { name, number } = contact;
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title text-capitalize">{name}</h5>
        {number}
      </div>
    </div>
  );
};

export default Contact;
