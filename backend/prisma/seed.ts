import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

declare const process: { exit(code?: number): void };

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  const password = await bcrypt.hash("12345678", 10);

  // -------------------------
  // Admin
  // -------------------------

  const admin = await prisma.user.upsert({
    where: {
      email: "admin@deeptiart.com",
    },
    update: {},
    create: {
      name: "Admin",
      email: "admin@deeptiart.com",
      password,
      role: "ADMIN",
    },
  });

  // -------------------------
  // Artist 1
  // -------------------------

  const artist1 = await prisma.user.upsert({
    where: {
      email: "artist1@deeptiart.com",
    },
    update: {},
    create: {
      name: "Aarav Sharma",
      email: "artist1@deeptiart.com",
      password,
      role: "ARTIST",
    },
  });

  await prisma.artistProfile.upsert({
    where: {
      userId: artist1.id,
    },
    update: {},
    create: {
      userId: artist1.id,
      phone: "9876543210",
      bio: "Spiritual & Acrylic Artist",
      address: "Mumbai",
      dob: new Date("1998-05-20"),
      instagram: "@aarav_art",
      portfolio: "https://portfolio.com/aarav",
      profileImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      status: "APPROVED",
    },
  });

  // -------------------------
  // Artist 2
  // -------------------------

  const artist2 = await prisma.user.upsert({
    where: {
      email: "artist2@deeptiart.com",
    },
    update: {},
    create: {
      name: "Priya Verma",
      email: "artist2@deeptiart.com",
      password,
      role: "ARTIST",
    },
  });

  await prisma.artistProfile.upsert({
    where: {
      userId: artist2.id,
    },
    update: {},
    create: {
      userId: artist2.id,
      phone: "9988776655",
      bio: "Nature Watercolor Artist",
      address: "Pune",
      dob: new Date("1999-08-15"),
      instagram: "@priya_art",
      portfolio: "https://portfolio.com/priya",
      profileImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      status: "APPROVED",
    },
  });

  // -------------------------
  // Users
  // -------------------------

  const user1 = await prisma.user.upsert({
    where: {
      email: "ram@gmail.com",
    },
    update: {},
    create: {
      name: "Ram",
      email: "ram@gmail.com",
      password,
      role: "USER",
    },
  });

  const user2 = await prisma.user.upsert({
    where: {
      email: "mahika@gmail.com",
    },
    update: {},
    create: {
      name: "Mahika",
      email: "mahika@gmail.com",
      password,
      role: "USER",
    },
  });

  const user3 = await prisma.user.upsert({
    where: {
      email: "user3@gmail.com",
    },
    update: {},
    create: {
      name: "Rahul",
      email: "user3@gmail.com",
      password,
      role: "USER",
    },
  });
    // -------------------------
  // Artworks
  // -------------------------

  const artwork1 = await prisma.artwork.upsert({
    where: {
      id: "seed-artwork-1",
    },
    update: {},
    create: {
      id: "seed-artwork-1",
      title: "Krishna Painting",
      description: "Beautiful handmade acrylic painting of Lord Krishna.",
      imageUrl:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
      category: "SPIRITUAL",
      medium: "Acrylic",
      width: 24,
      height: 36,
      price: 3500,
      frameAvailable: true,
      isApproved: true,
      isAvailable: true,
      artistId: artist1.id,
    },
  });

  const artwork2 = await prisma.artwork.upsert({
    where: {
      id: "seed-artwork-2",
    },
    update: {},
    create: {
      id: "seed-artwork-2",
      title: "Shiv Tandav",
      description: "Powerful handmade artwork of Lord Shiva.",
      imageUrl:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b",
      category: "SPIRITUAL",
      medium: "Oil",
      width: 30,
      height: 40,
      price: 5200,
      frameAvailable: true,
      isApproved: true,
      isAvailable: true,
      artistId: artist1.id,
    },
  });

  const artwork3 = await prisma.artwork.upsert({
    where: {
      id: "seed-artwork-3",
    },
    update: {},
    create: {
      id: "seed-artwork-3",
      title: "Mountain Sunrise",
      description: "Nature landscape with sunrise.",
      imageUrl:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      category: "NATURE",
      medium: "Watercolor",
      width: 20,
      height: 30,
      price: 2800,
      frameAvailable: false,
      isApproved: true,
      isAvailable: true,
      artistId: artist2.id,
    },
  });

  const artwork4 = await prisma.artwork.upsert({
    where: {
      id: "seed-artwork-4",
    },
    update: {},
    create: {
      id: "seed-artwork-4",
      title: "Village Landscape",
      description: "Traditional Indian village scenery.",
      imageUrl:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      category: "LANDSCAPE",
      medium: "Acrylic",
      width: 18,
      height: 24,
      price: 2600,
      frameAvailable: true,
      isApproved: true,
      isAvailable: true,
      artistId: artist2.id,
    },
  });

  const artwork5 = await prisma.artwork.upsert({
    where: {
      id: "seed-artwork-5",
    },
    update: {},
    create: {
      id: "seed-artwork-5",
      title: "Pencil Portrait",
      description: "Detailed handmade pencil portrait.",
      imageUrl:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
      category: "PORTRAIT",
      medium: "Pencil",
      width: 16,
      height: 20,
      price: 1800,
      frameAvailable: true,
      isApproved: false,
      isAvailable: true,
      artistId: artist1.id,
    },
  });

  const artwork6 = await prisma.artwork.upsert({
    where: {
      id: "seed-artwork-6",
    },
    update: {},
    create: {
      id: "seed-artwork-6",
      title: "Abstract Colors",
      description: "Modern abstract artwork.",
      imageUrl:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
      category: "ABSTRACT",
      medium: "Acrylic",
      width: 22,
      height: 28,
      price: 3100,
      frameAvailable: false,
      isApproved: true,
      isAvailable: true,
      artistId: artist2.id,
    },
  });
    // -------------------------
  // Inquiries
  // -------------------------

  await prisma.inquiry.createMany({
    data: [
      {
        userId: user1.id,
        artworkId: artwork1.id,
        preferredFrame: "Classic Wooden",
        preferredSize: "24x36",
        message: "I would like this painting with a dark wooden frame.",
        status: "NEW",
      },
      {
        userId: user2.id,
        artworkId: artwork2.id,
        preferredFrame: "Premium Black",
        preferredSize: "30x40",
        message: "Can I customize the frame?",
        status: "CONTACTED",
      },
      {
        userId: user3.id,
        artworkId: artwork3.id,
        preferredFrame: "Natural Wood",
        preferredSize: "20x30",
        message: "Please reserve this artwork.",
        status: "CONFIRMED",
      },
      {
        userId: user1.id,
        artworkId: artwork4.id,
        preferredFrame: "Classic Brown",
        preferredSize: "18x24",
        message: "Need delivery in Mumbai.",
        status: "COMPLETED",
      },
      {
        userId: user2.id,
        artworkId: artwork6.id,
        preferredFrame: "White Frame",
        preferredSize: "22x28",
        message: "Is this artwork still available?",
        status: "NEW",
      },
    ],
  });

  console.log("✅ Database Seeded Successfully");
  console.log("--------------------------------");
  console.log("Admin");
  console.log("Email: admin@deeptiart.com");
  console.log("Password: 12345678");
  console.log("--------------------------------");
  console.log("Artist 1");
  console.log("Email: artist1@deeptiart.com");
  console.log("Password: 12345678");
  console.log("--------------------------------");
  console.log("Artist 2");
  console.log("Email: artist2@deeptiart.com");
  console.log("Password: 12345678");
  console.log("--------------------------------");
  console.log("User");
  console.log("Email: ram@gmail.com");
  console.log("Password: 12345678");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });