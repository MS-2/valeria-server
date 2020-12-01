import Company from '../models/Company';
import User from '../models/User';


export const create = async (req, res) => {
  const { name, color, id } = req.body;
  let input = { name, color, id }
  const companySaved = Company.create(input).then(
    function exito(params) {
      // console.log("los params : ", params);
      // console.log("exito");
      const cosa = new User({
        email: 'test@gmail.com',
        pass: '1234',
        companys: params._id    // assign the _id from the person
      });
      cosa.save();
      return params;
    },
    function fracaso(params) {
      console.log("fracaso");
    }
  )
  res.status(201).json(companySaved);
}


export const createCompany = async (req, res) => {
  // const {name, nit} = req.body
  const empresa = req.body.empresa;
  try {
    for (let i = 0; i < Object.keys(empresa).length; i++) {
      if (Object.entries(empresa)[i][i] === '') {
        return res.status(500).send("todos los campos son requeridos");
      }
    }
    const newCompany = new Company({ empresa });
    const companySaved = await newCompany.save();
    console.log("empresa creada");
    res.status(201).json(companySaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getcompanies = async (req, res) => {
  const products = await Company.find();
  return res.json(products);
}

export const getcompany = async (req, res) => {
  const { productId } = req.params;
  const product = await Company.findById(productId);
  res.status(200).json(product);
}

export const updateproduct = async (req, res) => {
  const updatedProduct = await Company.findByIdAndUpdate(
    req.params.productId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedProduct);
};
export const deleteproduct = async (req, res) => {
  const { productId } = req.params;

  await Company.findByIdAndDelete(productId);

  // code 200 is ok too
  res.status(204).json();
}