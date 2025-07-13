# Upgrade Notes - Node 20+ Compatibility

This document outlines the changes made to upgrade the portfolio project to be compatible with Node 20+ and the latest versions of all dependencies.

## Major Version Updates

### Core Dependencies
- **Node.js**: Now requires Node 18.17.0+ (recommended: Node 20+)
- **Next.js**: 12.0.4 → 14.0.4
- **React**: 17.0.2 → 18.2.0
- **TypeScript**: 4.5.2 → 5.3.3
- **styled-components**: 5.3.1 → 6.1.6

### Development Dependencies
- **ESLint**: 7.32.0 → 8.56.0
- **@types/node**: 16.11.9 → 20.10.0
- **@types/react**: 17.0.36 → 18.2.45

## Breaking Changes & Fixes

### 1. SVG Handling
**Before**: Used `next-react-svg` package
**After**: Using `@svgr/webpack` directly

- Removed `next-react-svg` dependency
- Added `@svgr/webpack` configuration in `next.config.js`
- Created `svg.d.ts` for TypeScript declarations
- SVG imports continue to work exactly as before

### 2. Next.js Configuration
- Updated `next.config.js` to use the latest configuration format
- Added native styled-components compiler support with SSR
- Added `reactStrictMode: true` for better development experience
- Added `output: "export"` for static export compatibility
- Updated image optimization settings for static hosting

### 3. TypeScript Configuration
- Updated target to `es2017` for better performance
- Changed `moduleResolution` to `bundler` (Next.js 14+ recommended)
- Added Next.js plugin for better TypeScript integration
- Added path mapping with `@/*` for potential future use

### 4. styled-components v6 Updates
- Removed custom Babel configuration (Next.js handles this natively now)
- Enhanced `_document.tsx` for improved SSR support with styled-components v6
- Fixed prop filtering issues by using transient props (`$` prefix) for styling-only props
- Updated NavBar component to use `$isTop`, `$fontColor`, `$backgroundColor` instead of direct props
- All existing styled-components code continues to work without changes

### 5. Build Scripts & Static Export
- Updated to use Next.js 14's new static export method
- Removed deprecated `next export` command
- `npm run build` builds the project (with static export if configured)
- `npm run export` is now an alias for `npm run build` with static output
- Static files are generated in the `out` directory

## Migration Steps

### 1. Install Dependencies
```bash
# Remove old dependencies
rm -rf node_modules package-lock.json yarn.lock

# Install new dependencies
npm install
# or
yarn install
```

### 2. Update Node.js Version
Ensure you're using Node.js 18.17.0 or higher:
```bash
node --version
```

### 3. Check for Type Errors
```bash
npm run lint
```

### 4. Test the Build
```bash
npm run dev
```

## Potential Issues & Solutions

### Issue 1: SVG Import Errors
If you encounter SVG import issues:
- Ensure all SVG files are in the `assets/svg` directory
- Check that the SVG files are valid
- Restart the development server

### Issue 2: styled-components v6 Prop Warnings
If you see warnings like "React does not recognize the `propName` prop on a DOM element":
- styled-components v6 is stricter about prop filtering
- Use transient props (prefixed with `$`) for styling-only props
- Example: `<StyledDiv $color="red" />` instead of `<StyledDiv color="red" />`
- We've already fixed these issues in the NavBar component

### Issue 3: styled-components Hydration Issues
If you see hydration warnings:
- Clear browser cache and restart the development server
- Ensure no custom Babel configuration conflicts with Next.js compiler
- The new native styled-components support should eliminate most hydration issues

### Issue 4: TypeScript Errors
Common fixes:
- Run `npm run lint` to identify issues
- Update import statements if needed
- Check that all type definitions are properly installed

## New Features Available

### 1. Next.js 14 Features
- Native styled-components compiler (faster than Babel plugin)
- Improved static export with `output: "export"`
- Better image optimization and TypeScript support

### 2. React 18 Features
- Automatic batching
- Improved Suspense support
- Concurrent features (when opted in)

### 3. TypeScript 5.3 Features
- Better type inference
- Improved performance
- Enhanced editor support

## Performance Improvements

- **Faster builds**: Next.js 14 includes significant build performance improvements
- **Better bundling**: Updated webpack configuration for optimal bundle sizes
- **Enhanced caching**: Improved caching strategies for development and production

## Compatibility Notes

- **Node.js**: Minimum version 18.17.0, recommended 20+
- **npm**: Minimum version 9.0.0
- **Browser support**: Modern browsers (ES2017+)

## Rollback Instructions

If you need to rollback to the previous versions:

1. Restore the original `package.json` from git history
2. Restore the `.babelrc` file (if needed for older versions)
3. Restore the original `next.config.js` and other config files
4. Run `npm install` or `yarn install`

## Support

If you encounter any issues during the upgrade:

1. Check the [Next.js 14 migration guide](https://nextjs.org/docs/app/building-your-application/upgrading)
2. Review the [React 18 upgrade guide](https://react.dev/blog/2022/03/08/react-18-upgrade-guide)
3. Check the [styled-components v6 migration guide](https://styled-components.com/releases#v6.0.0)

## Testing Checklist

After upgrade, verify:

- [ ] Development server starts without errors (`npm run dev`)
- [ ] All pages load correctly
- [ ] SVG icons display properly
- [ ] Styled components render correctly
- [ ] Build process completes successfully (`npm run build`)
- [ ] Static export works (`npm run export` and check `out` directory)
- [ ] No console errors or React prop warnings in browser
- [ ] Responsive design works across devices  
- [ ] All interactive elements function properly
- [ ] SVG icons load and display correctly