
import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const Homepage = async () => {
    const billborad = await getBillboard("10ea5822-708f-4bca-b4d1-cb037e912039")
  return (
    <Container>
        <div className="space-y-10 pb-10">
            <Billboard data={billborad}/>
        </div>
    </Container>
  )
}

export default Homepage;