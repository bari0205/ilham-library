const { User, Category, Books } = require("../../models");

exports.getBooks = async (req, res) => {
  try {
    const books = await Books.findAll({
      include: [
        {
          model: User,
          as: "bookUser",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },

        {
          model: Category,
          as: "bookCategory",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],

      attributes: {
        exclude: ["createdAt", "updatedAt",, "userId", "categoryId", "UserId", "CategoryId"],
      },
    });

    res.send({
      message: "Response Successfuly Loaded",
      data: { all: books },
    });
  } catch (err) {
    console.log(err);

    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.readOneBooks = async (req, res) => {
  try {
    const { id } = req.params;
    const detailBooks = await Books.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt",, "userId", "categoryId", "UserId", "CategoryId"],
      },
      include: [
        {
          model: User,
          as: "bookUser",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },

        {
          model: Category,
          as: "bookCategory",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      
    });

    res.send({
      message: "Response Successfuly Loaded",
      data: { detail: detailBooks },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.createBooks = async (req, res) => {
  try {
    const createBooks = await Books.create(req.body);

    res.send({
      message: "Category has succesfully created",
      data: {
        create: createBooks,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.updateBooks = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const updateBooks = await Books.update(
      {
        categoryId: body.categoryId,
        title: body.title,
        publication: body.publication,
        page: body.page,
        ISBN: body.ISBN,
        aboutBook: body.aboutBook,
        file: body.file,
        status: body.status,
      },
      {
        where: {
          id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        individualHooks: true,
      }
    );

    res.send({
      message: "Category has succesfully created",
      data: {
        update: updateBooks,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.deleteBooks = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBooks = await Books.destroy({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      message: "Delete Data Successfuly",
      data: { id },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};
