package com.fr.schoolmanager.utilities;

import java.io.ByteArrayOutputStream;
import java.util.Arrays;
import java.util.List;

public class ExcelTools {

    public static <T> byte[] convertToExcel(List<T> data) {
        ByteArrayOutputStream out = new ByteArrayOutputStream();;
        try {
            /*Workbook wkb = new XSSFWorkbook();

            Sheet sheet = wkb.createSheet();

            Font header = wkb.createFont();
            header.setBold(true);
            header.setColor(IndexedColors.BLUE_GREY.getIndex());

            CellStyle headerCellStyle = wkb.createCellStyle();
            headerCellStyle.setFont(header);

            Row headerRow = sheet.createRow(0);


            wkb.write(out);
            wkb.close();*/
            data.forEach(e -> { Arrays.asList(e.getClass().getDeclaredFields()).forEach(f -> System.out.println(f.getName())); });
        } catch(Exception e) {
            System.out.println("Error : " + e.getMessage());
        }
        return out.toByteArray();
    }

    public static <T> List<T> parseExcelFile() {
        return null;
    }
}
