import { BillboardColumn } from "./components/columns";
import { BillboardClient } from "./components/client";
import prismadb from "@/lib/prismadb";
import { format } from "date-fns";

const BillboardsPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    imageUrl: item.imageUrl,
    label: item.label,
    createdAt: format(item.createdAt, 'MM/dd/yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboards} />
      </div>S
    </div>
  );
}

export default BillboardsPage;