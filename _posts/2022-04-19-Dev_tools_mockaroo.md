---
layout: post
title: 🛠 Tools for developers - Mock data with Mockaroo
---

Have you ever needed to create test data for your application? In the past this was a terrible task. You had to be very patient and add new records one by one or programm a script that would automatize this procedure taking into account your data types and some possible variations.

Nowadays there are tons of tools to do this task, but I would like to start this series of _Tools for developers_ with Mockaroo, a free web application that generates mock data.

## Flexibility on data types
One of the best things that Mockaroo has it's a wide range of pre-defined datatypes. You can define new fields by asigning them a name and a type. The type can be one of the 157 (_by 19th Apr 2022_) already present on their website or you can define your owns by using regular expressions and formulas.

### Pre-defined data types
Mockaroo offers a set of data types that you can choose to generate fake date. They are organized by groups like **Commerce, IT, Location** and some others including interesting types like **IP Address, Phone, Avatar or even IBAN**. By choosing these types, the web application will randomly generate data according to them, ready to be ingested in your database.

![Screenshot of Mockaroo website displaying the types selection dialog]({{site.baseurl}}/assets/images/dev_tools_mockaroo/mockaroo_types.JPG)

### Own data types with regular expressions
You can also set your own rules to generate data by writing a regular expression. This way, Mockaroo will create random registries appliying the expression. In combination with the pre-defined types, this probably could cover all your needs.

### Formulas to alter the value
Besides that, once a value has been created, the tool offers you the possibility to alter its value by executing a formula. The formula allows you to use Ruby and a set of functions to mutate the mock values you would like to obtain on a deeper level.

![Screenshot of Mockaroo website displaying the formulas information]({{site.baseurl}}/assets/images/dev_tools_mockaroo/mockaroo_formulas.JPG)

## Exporting the data
Once you have configured all the fields and their types you can preview some mock data before exporting it into a file. Mockaroo gives us the possibility to choose an export on **CSV, JSON, Text, SQL, Cassandra CQL, Firebase, InfluxDB, Excel, XML and DBUnit XML** for up to 1,000 rows for free. They have a paid plan to increase the amount of registries to generate, but nothing restricts you to generate several datasets of the same type.

![Screenshot of Mockaroo website displaying the export formats]({{site.baseurl}}/assets/images/dev_tools_mockaroo/mockaroo_export.JPG)

![Screenshot of Mockaroo website displaying the preview of an export]({{site.baseurl}}/assets/images/dev_tools_mockaroo/mockaroo_preview.JPG)

