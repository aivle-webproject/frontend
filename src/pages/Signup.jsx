// src/pages/SignupPage.jsx
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";

function SignupPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // TODO: 회원가입 API 연동
    navigate("/login");
  };

  return (
    <AuthLayout>
      <Card
        elevation={0}
        sx={{
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255,255,255,0.9)",
          boxShadow: "0 18px 45px rgba(15,23,42,0.12)",
        }}
      >
        <CardContent
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 3,
            p: { xs: 3, sm: 4 },
          }}
        >
          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
              회원가입
            </Typography>

            {/* 이름 */}
            <TextField
              label="이름"
              required
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonRoundedIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />

            {/* 성별 */}
            <TextField
              select
              label="성별"
              required
              fullWidth
              margin="normal"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value="male">남성</MenuItem>
              <MenuItem value="female">여성</MenuItem>
              <MenuItem value="other">기타</MenuItem>
            </TextField>

            {/* 생년월일 */}
            <TextField
              label="생년월일"
              type="date"
              required
              fullWidth
              margin="normal"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />

            {/* 아이디 */}
            <TextField
              label="아이디"
              required
              fullWidth
              margin="normal"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonRoundedIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />

            {/* 비밀번호 */}
            <TextField
              label="비밀번호"
              type="password"
              required
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockRoundedIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />

            {/* 비밀번호 확인 */}
            <TextField
              label="비밀번호 확인"
              type="password"
              required
              fullWidth
              margin="normal"
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockRoundedIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                py: 1.2,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              회원가입 완료
            </Button>

            <Box
              sx={{
                mt: 2.5,
                display: "flex",
                justifyContent: "center",
                gap: 0.5,
              }}
            >
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                이미 계정이 있나요?
              </Typography>
              <Typography
                component={RouterLink}
                to="/login"
                variant="body2"
                sx={{
                  fontWeight: 600,
                  textDecoration: "none",
                  color: "primary.main",
                }}
              >
                로그인
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}

export default SignupPage;
