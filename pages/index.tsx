import styles from '../styles/Home.module.scss'
import Datas from "../data.json"

const Home = () => {
  return (
    <>
      <div className={styles.container}>


        <table className={styles.tableBordered}>
          <thead>
            <tr>
              <th>Product Description</th>
              <th>Category Description</th>
              <th>Total Stock</th>
              <th>Total Order</th>
              {
                Datas.location.map(data => (
                  <th key={data.id}>{data.name}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              Datas.proformaItem.map(data => {

                const productStock = JSON.parse(data.product_stock)
                const mapStock = productStock.reduce((prev, curr) => {
                  const keys = Object.keys(curr)
                  if (keys[0] == '1') {
                    prev['qtyKedoya'] = curr['1']
                  }
                  if (keys[0] == '3') {
                    prev['qtyDadap'] = curr['3']
                  }
                  if (keys[0] == '5') {
                    prev['qtyGalaxy'] = curr['5']
                  }

                  return prev
                }, {})

                const qtyKedoya = mapStock.qtyKedoya || 0
                const qtyDadap = mapStock.qtyDadap || 0
                const qtyGalaxy = mapStock.qtyGalaxy || 0


                console.log({ qtyKedoya, qtyDadap, qtyGalaxy })
                // const qtyKedoya = productStock.filter(data => data["1"])[0]["1"]
                // const qtyDadap = productStock.filter(data.indexOf(location) => data["3"])[0]["3"]
                // const qtyGalaxy = productStock.filter(data => data["5"])[0]["5"]

                return (
                  <tr>
                    <td key={data.product_id}>{data.productDescription}</td>
                    <td key={data.product_id}>{data.categoryDescription}</td>
                    <td key={data.product_id}></td>
                    <td key={data.product_id}></td>
                    <td key={data.product_id}>{qtyKedoya}</td>
                    <td key={data.product_id}>{qtyDadap}</td>
                    <td key={data.product_id}>{qtyGalaxy}</td>
                  </tr>
                )
              })
            }


          </tbody>

        </table>
      </div>
    </>
  )
}

export default Home
