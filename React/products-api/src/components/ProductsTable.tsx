import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Product } from "../pages/Products";
import { useContext } from "react";
import ThemeContext from "../contexts/themes";

// in TS, all props must be defined with a type
type ProductsTableProps = {
    productList : Product[]
}

export default function ProductsTable(props : ProductsTableProps) {

    // using the context that is managaed in App.tsx
    const theme = useContext(ThemeContext);

    return (
        <div style={theme}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>SKU</TableCell>
                            <TableCell>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* iteration components require keys so the DOM sees them as unique */}
                        {props.productList.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.sku}</TableCell>
                                <TableCell>{product.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}