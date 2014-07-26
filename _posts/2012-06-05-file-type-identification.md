---
layout: post
title: File Type Identification
---
Analysing raw binary is something that always makes me feel cool, like I'm from some sort of CSI/Bones type program, I assume it falls under the guise of data forensics. But before diving into the guts of a file it might be worth knowing a few things to look out for, here's what I found when tasked with identifying a great lump of unidentified binary. As an example I will be using the following JPEG pictures of my favorite Scotch and my dog.
![Glenmorangie](/img/Glenmorangie.jpg "Glenmorangie")
![Mya](/img/Mya.jpg "Mya")

### Magic Numbers
"Magic number" may sound like some sort of legal high however the term "magic number" when used in the context of file types is defined as: *a textual or numerical constant (typically at the beginning or end of a file) that can be used to identify a file format*. So this means that if we open our files in a hex editor, look at the first few bytes and cross reference that against a list of known magic numbers then we might be in for a winner . Both the example images are JPEG files so if we take a look at them in a hex editor:

![Jpeg Magic Number example 1](/img/JpegMagicNumberExample1.png "Jpeg Magic Number example 1")
![Jpeg Magic Number example 2](/img/JpegMagicNumberExample2.png "Jpeg Magic Number example 2") 

You can see that both the files start with "FF D8" and it just so happens that I know that the magic number for JPEG files is "FF D8" so if we try open the files in a JPEG editor they miraculously work.

A couple of other examples of magic numbers (textual representations in brackets) are:

- PDF = "25 50 44 46" (%PDF)
- ZIP = "50 4B" (PK)

Unfortunately in reality, '50 4B' may not always simply be a ZIP file as there are a lot of formats that use ZIP compression particularly Microsoft Open Office formats (e.g. DOCX, XLSX). Also another naff thing about Magic Numbers is that not all formats directly use them.

### File Headers
File headers are typically at the beginning of the file and typically contain metadata about the remaining file contents. Unfortunately discerning file headers is a lot more ambiguous then magic numbers as each file type may have it's own way of describing the header. Publishers of different formats usually provide documentation on how to read a file and it's metadata, for each element of metadata this will usually consist of; an offset or marker (the position of the starting byte), a count (the number of bytes to read) and the simple data type of that block of data (e.g. string). You can see an example of this on Wikipedia : [http://en.wikipedia.org/wiki/JPEG_File_Interchange_Format#File_format_structure](http://en.wikipedia.org/wiki/JPEG_File_Interchange_Format#File_format_structure).

Finding a file type this way isn't really a good option unless you work with raw data on a regular basis and can learn to identify file types by eye. One thing we can do though is open the files in our trusty hex editor and try to pick out the human readable text like so:

![File header example 1](/img/FileHeaderExample1.png "File Header Example 1")

From this you can clearly see in the metadata that "Adobe Photoshop" along with the time and date is mentioned so we could guess that the file is an image that has been saved from Photoshop. We can also see that JFIF and EXIF is mentioned so we could reasonably guess that the file is a JPEG.

### External Metadata
One final thing to look out for is external metadata. By external metadata i mean information about the file that isn't stored within the files data. This could be found in the scenario where you've recovered a lump of corrupted disk data and elements of the file system are still intact. Operating systems such as Windows tend to store information about the file in the file system as a quick and type-agnostic way to keep track of information about the file.

I've had to do this before when recovering data from a database, the data was stored as blobs in the database and wrapped in a sort of custom OLE type wrapper by a custom program, this wrapper contained information about the file which helped determine the resulting file and where it was inside the blob.


Hopefully the methods in the post will provide the basic tools you need to solve your data identification problem.

## Resources
[http://mark0.net/soft-trid-e.html](http://mark0.net/soft-trid-e.html) - TrID, a Tool for identifying files based on their binary signature.
[http://www.garykessler.net/library/file_sigs.html](http://www.garykessler.net/library/file_sigs.html) - A nice list of magic numbers.
