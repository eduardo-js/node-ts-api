-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
