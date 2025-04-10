
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const Homepage = async () => {
  const products = await getProducts({ isFeatured: true}); 
  const billborad = await getBillboard("10ea5822-708f-4bca-b4d1-cb037e912039")
  return (
    <Container>
        <div className="space-y-10 pb-10">
            <Billboard data={billborad}/>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products}/>
        </div>
    </Container>
  )
}

export default Homepage;