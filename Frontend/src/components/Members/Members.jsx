import { useGetConsultingQuery } from '../../App/slices/ConsultingSlice'

function Members() {
  let { data, isLoading } = useGetConsultingQuery()


  return (
    <div className='Members'>
      <div className="container">
        <div className="text">
          <p>Our professional members</p>
          <h1>Our team Members</h1>
        </div>
        <div className="card-wrapper">
          {
            isLoading ? (
              <h1>...Loading</h1>
            ) : (
              data.map((member) => (
                <div className="card" key={member._id}>
                  <div className="image">
                    <img src={member.image} alt="" />
                  </div>
                  <div className="content">
                    <div className="head">
                      <p>{member.name}</p>
                      <span>{member.specialization}</span>
                    </div>
                    <div className="btns">
                      <button>✖️</button>
                      <button>❤️</button>
                    </div>
                  </div>
                </div>
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Members
